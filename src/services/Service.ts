import axios from "axios"

export const api = axios.create({
    baseURL: "https://lojagames-nest.onrender.com"
  })
  
  // Service de Consulta (GET)
  export const listar = async(url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
  }

  // Service de Cadastro (POST)
  export const cadastrar = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
  }
  
  // Service de Atualização (PUT)
  export const atualizar = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
  }

  // Service de Exclusão (DELETE)
  export const deletar = async(url: string) => {
    await api.delete(url)
  }