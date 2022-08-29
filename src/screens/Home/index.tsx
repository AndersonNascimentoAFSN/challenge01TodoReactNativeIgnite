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
  const [taskText, setTaskText] = useState<string>('');
  const [tasks, setTasks] = useState<task[]>([]);

  function genTaskId(lastId: number) {
    return lastId + 1 || 1;
  }

  function handleAddTask() {
    const taskExists = tasks.find(task => task.name === taskText);

    const newTask = {
      id: genTaskId(tasks[tasks.length - 1]?.id),
      name: taskText,
    };

    if (taskExists) {
      Alert.alert(
        'Task Already Exists',
        'This task already exists want to add it?',
        [
          {text: 'cancel', style: 'cancel', onPress: () => setTaskText('')},
          {
            text: 'Add',
            onPress: () => {
              setTasks(prev => [...prev, newTask]);
              Alert.alert(
                'Task added!',
                'Your task has been added to the list',
              );
              setTaskText('');
            },
          },
        ],
      );
      return;
    }

    if (taskText) {
      setTasks(prev => [...prev, newTask]);
      setTaskText('');
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
          onChangeText={setTaskText}
          value={taskText}
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
