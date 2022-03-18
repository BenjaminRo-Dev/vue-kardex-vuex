export default {
    name: 'kardex',
    component: () => import(/* webpackChunkName: "about" */ '@/modules/kardex/layouts/KardexLayout.vue'),
    children: [
        {
            //Si no hay nada seleccionado entra al path vacio, por defecto vacio es no hay mantenimiento selec
            path: '',
            name: 'mantenimiento-no-seleccionado',//Este name es llamado en src/views/Home.vue
            component: () => import(/* webpackChunkName: "kardex-mantenimiento-no-seleccionado" */ '@/modules/kardex/views/MantenimientoNoSeleccionado.vue'),
        },
        {
            path: ':id',
            name: 'mantenimiento',
            component: () => import(/* webpackChunkName: "kardex-mantenimiento-seleccionado" */ '@/modules/kardex/views/VistaMantenimiento.vue'),
        }
    ]
}