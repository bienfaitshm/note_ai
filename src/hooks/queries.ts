import { useMutation, useQuery } from '@tanstack/vue-query'
import { postChatCompletions } from "@/lib/open-router"
import { createTask, getTask, deleteTask, toggleTaskCompleted, updateTask, getTasks, type Task } from "@/lib/stores"

export function useGenerateDescription() {
  return useMutation({
    mutationKey:["GENERATE_DESCRIPTION"],
    mutationFn:({title}:{ title: string})=> {
      console.log("useGenerateDescription",{title})
      return postChatCompletions({
      messages:[
            {role:"user", content:`Génère une petite description captivante et informative en 2 lignes pour le titre suivant :${title}`}
        ]
    })
    }
  })
}

export function useGetTasks() {
  return useQuery({
    queryKey:["GET_TASKS"],
    queryFn:()=> getTasks()
  })
}

export function useGetTask(taskId: string) {
  return useQuery({
    queryKey:["GET_TASK", taskId],
    queryFn:()=> getTask(taskId)
  })
}

export function useCreateTask() {
  return useMutation({
    mutationKey:["CREATE_TASK"],
    mutationFn:(value:Omit<Task,"id"|"completed">)=> createTask(value)
  })
}

export function useUpdateTask(taskId:string) {
  return useMutation({
    mutationKey:["UPDATE_TASK", taskId],
    mutationFn:(value:Partial<Omit<Task,"id"|"completed">>)=> updateTask(taskId,value)
  })
}

export function useDeleteTask(taskId:string) {
  return useMutation({
    mutationKey:["DELETE_TASK", taskId],
    mutationFn:()=> deleteTask(taskId)
  })
}

export function useMarckDoneTask(taskId:string) {
  return useMutation({
    mutationKey:["MARK_AS_DONE_TASK", taskId],
    mutationFn:()=> toggleTaskCompleted(taskId)
  })
}
