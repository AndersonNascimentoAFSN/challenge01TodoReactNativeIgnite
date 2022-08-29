import React, {useState} from 'react';
import {Alert, FlatList, SafeAreaView, View} from 'react-native';
import {AddButton} from '../../components/AddButton';
import {Empty} from '../../components/Empty';
import {Header} from '../../components/Header';
import {Input} from '../../components/Input';
import {StatusCounter} from '../../components/StatusCounter';
import {Task} from '../../components/Task';
import {styles} from './styles';

type task = {
  id: number;
  name: string;
  isCompleted?: boolean;
};

export function Home() {
  const [taskName, setTaskName] = useState<string>('');
  const [tasks, setTasks] = useState<task[]>([]);

  function genTaskId(lastId: number) {
    return lastId + 1 || 1;
  }

  function handleAddTask() {
    if (taskName) {
      const newTask = {
        id: genTaskId(tasks[tasks.length - 1]?.id),
        name: taskName,
      };

      setTasks(prev => [...prev, newTask]);
      setTaskName('');
    }
  }

  function handleRemoveTask(taskId: number) {
    Alert.alert('Delete Task', 'Do you really want to delete the task?', [
      {text: 'cancel', style: 'cancel'},
      {
        text: 'Delete',
        onPress: () => {
          setTasks(prevState => prevState.filter(item => item.id !== taskId));
          Alert.alert(
            'Task deleted!',
            'The task has been deleted and will no longer appear in your list',
          );
        },
      },
    ]);
  }

  function handleCompleteTask(idTask: number) {
    setTasks(prevState =>
      prevState.map(item => {
        if (item.id === idTask) {
          return {...item, isCompleted: !item.isCompleted};
        }
        return item;
      }),
    );
  }

  const totalTasks = tasks.length;
  const totalTasksCompleted = tasks.filter(item => item.isCompleted).length;

  return (
    <SafeAreaView style={styles.main}>
      <Header />

      <View style={styles.addTaskContainer}>
        <Input
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#555"
          onChangeText={setTaskName}
          value={taskName}
        />
        <AddButton onPress={handleAddTask} />
      </View>

      <View style={styles.containerInfo}>
        <View style={styles.wrapperInfo}>
          <StatusCounter
            titleStatus="Criadas"
            totalStatus={totalTasks}
            colorType="created"
          />
          <StatusCounter
            titleStatus="Concluídas"
            totalStatus={totalTasksCompleted}
            colorType="completed"
          />
        </View>
      </View>

      <View style={styles.containerTask}>
        <FlatList
          data={tasks}
          // keyExtractor={item => item.id}
          ListEmptyComponent={() => (
            <View style={styles.containerEmpty}>
              <Empty
                title=" Você ainda não tem tarefas cadastradas"
                subtitle="Crie tarefas e organize seus itens a fazer"
              />
            </View>
          )}
          renderItem={({item}) => (
            <View style={styles.containerTask}>
              <Task
                task={item}
                onCompleteTask={() => handleCompleteTask(item.id)}
                onPress={() => handleRemoveTask(item.id)}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
