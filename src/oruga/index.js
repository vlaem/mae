import '@oruga-ui/oruga-next/dist/oruga-full-vars.css'
import { Button, Datepicker, Field, Input, Select, Tabs, Upload } from '@oruga-ui/oruga-next'

export default {
    install: (app) => {
        app.use(Button)
        app.use(Field)
        app.use(Input)
        app.use(Tabs)
        app.use(Datepicker)
        app.use(Select)
        app.use(Upload)
    }
}
