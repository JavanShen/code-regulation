import { execa } from 'execa'

const execaCommand = (command: string) => {
    return new Promise(res => {
        const { stdout } = execa(command, []).on('close', () => {
            res('end')
        })

        stdout?.on('data', buffer => {
            process.stdout.write(buffer)
        })
    })
}

export default execaCommand
