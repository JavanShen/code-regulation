import inquirer from 'inquirer'

const create = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'first',
            message: 'this is first'
        }
    ])
}

export default create
