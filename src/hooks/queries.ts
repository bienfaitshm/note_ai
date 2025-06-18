import { useMutation } from '@tanstack/vue-query'
import { postChatCompletions } from "@/lib/open-router"

export function useGenerateDescription() {
  return useMutation({
    mutationKey:[],
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
