//ESTE ARCHIVO ESTABLECE LAS RUTAS O ENDPOINTS DE CADA SERVICIO OFRECIDO POR MI API
import express from 'express'

import { ControladorHabitacion } from '../Controllers/ControladorHabitacion.js'
import {ControladorReservas} from '../Controllers/ControladorReservas.js'
let controladorHabitacion=new ControladorHabitacion() //usando el controlador
let controladorReservas= new ControladorReservas()
export let rutasPersonalizadas=express.Router()

rutasPersonalizadas.get('/hotelesnick/habitaciones',controladorHabitacion.buscarHabitaciones)
rutasPersonalizadas.get('/hotelesnick/habitacion/:idHabitacion',controladorHabitacion.buscarHabitacionPorId)
rutasPersonalizadas.post('/hotelesnick/habitacion',controladorHabitacion.registrarHabitacion)
rutasPersonalizadas.put('/hotelesnick/habitacion/:idHabitacion',controladorHabitacion.editarHabitacion)


//rutas para reservas
rutasPersonalizadas.get('/hotelesnick/reservas', controladorReservas.buscarReserva)
// rutasPersonalizadas.get('/hotelesnick/reserva/:idreserva', controladorReservas)
rutasPersonalizadas.post('/hotelesnick/reserva', controladorReservas.ingreserReserva)
// rutasPersonalizadas.put('/hotelesnick/reserva/:idreserva', controladorReservas.editarHabitacion)
