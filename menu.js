const {app, Menu} = require('electron')

const serMainMenu = () => {
    const template = [
        {
            label: 'markDown',
            submenu:[
                {
                    label:'fuera de aqui',
                    click: ()=>{
                        app.quit
                    }
                }
            ]
        }
    ]
}