import {Router} from 'restify-router'
import ffmpegRoute from './ffmpeg.router'

const PrincipalRouter = new Router()

const ThreeRouter = new Router()

ThreeRouter.add('/ffmpeg', ffmpegRoute)

PrincipalRouter.add('/api/services', ThreeRouter)

export default PrincipalRouter