import { URI } from "../enum/uri";
import axiosLogin from "../login/axiosLogin";
import ControleSessao from "../login/ControleSessao";

export default class TicketRequests {

  public async newTicket(body: object) {
    try {
      const resposta = await axiosLogin.post(URI.INSERT_CHAMADOS, body, {
        headers: {
          'Authorization': 'Bearer ' + ControleSessao.getToken()
      }
      })
      window.alert("Chamado cadastrado!")
      window.location.href = '/page/usuario/home'
      return resposta.data
    } catch (err) {
      console.log(err)
      window.alert("Ocorreu um erro!")
    }
  }

  public async newComment(body: object){
    try {
      const resposta = await axiosLogin.put(URI.COMENTARIO_CHAMADOS, body, {
        headers: {
          'Authorization': 'Bearer ' + ControleSessao.getToken()
    }
    })
    window.location.reload()
    return resposta.data
    } catch (err){
      console.log(err)
      window.alert("Ocorreu um erro")
    }
  }

  public async newSolution(body: object){
    try {
      const resposta = await axiosLogin.put(URI.SOLUCAO_CHAMADOS, body, {
        headers: {
          'Authorization': 'Bearer ' + ControleSessao.getToken()
    }
    })
    window.alert('Solução inserida!')
    window.location.href = '/page/tickets/solutions'
    return resposta.data
    } catch (err){
      console.log(err)
      window.alert("Ocorreu um erro")
    }
  }

  public async insertSupport(body: object){
    try {
      const resposta = await axiosLogin.put(URI.SUPORTE_CHAMADO, body, {
        headers: {
          'Authorization': 'Bearer ' + ControleSessao.getToken()
        }
      })
      window.location.reload()
    } catch (err) {
      console.log(err)
      window.alert("Ocorreu um erro")
    }
  }
}