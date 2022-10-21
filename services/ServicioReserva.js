import { modeloReserva } from "../Models/ModeloReservas.js"

export class ServicioReserva {

     //aqui programo metodos para cada una de las
     //consultas que quiero hacer en bd

     async buscarReservas() {
          let reservas = await modeloReserva.find()
          return reservas
     }

     // async buscarReservasPorId(id) {
     //      let reserva = await modeloReserva.findById(id)
     //      return reserva
     // }

     async agregarReservaenBD(datos) {
          let datosValidados = new modeloReserva(datos)
          return await datosValidados.save()
     }

     // async editarHabitacion(id, datos) {

     //      return await modeloHabitacion.findByIdAndUpdate(id, datos)
     // }

}