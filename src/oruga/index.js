import '@oruga-ui/oruga-next/dist/oruga-full-vars.css'
import { Button, Field, Input, Tabs } from '@oruga-ui/oruga-next'

export default {
    install: (app) => {
        app.use(Button)
        app.use(Field)
        app.use(Input)
        app.use(Tabs)
    }
}
