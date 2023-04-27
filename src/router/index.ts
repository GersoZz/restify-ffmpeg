import {Router} from 'restify-router'
import bootcampRoute from './bootcamp.router'

const PrincipalRouter = new Router()

const ThreeRouter = new Router()

ThreeRouter.add('/bootcamp', bootcampRoute)

PrincipalRouter.add('/api/services', ThreeRouter)

export default PrincipalRouter