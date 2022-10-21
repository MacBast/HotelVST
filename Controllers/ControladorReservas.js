import { ServicioHabitacion } from '../services/ServicioHabitacion.js'
import { ServicioReserva } from '../services/ServicioReserva.js'


export class ControladorReservas{

     constructor(){}

     async buscarReserva(request,response){
          let objetoServicioReserva = new ServicioReserva()
          try {
               response.status(200).json({
                    "mensaje": "exito en la consulta",
                    "datos": await objetoServicioReserva.buscarReservas(),
               })
          } catch (e) {
               response.status(400).json({
                    "mensaje": "error en la consulta " + error,
                    "datos": null,
               })
          }
     }

     async ingreserReserva(request, response){
          let datosReserva = response.body
          let objetoServicioReserva = new ServicioReserva()
          let objetoServicioHabitacion = new ServicioHabitacion()

          try {
               await objetoServicioReserva.agregarReservaenBD(datosReserva)

               response.status(200).json({
                    "mensaje": "Exito registrando habitacion",
                    "datos": null
               })
          } catch (error) {
               response.status(400).json({
                    "mensaje": "No se registro la Reserva" + error,
                    "datos": null
               })
          }
     }
}