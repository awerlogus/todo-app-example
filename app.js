import { program } from 'services/program/prod/alg-program'
import { runProgram } from 'use-cases/program/srv-program'

(async () => {
  await runProgram(program)()

  process.exit(0)
})()
