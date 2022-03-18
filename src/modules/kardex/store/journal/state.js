export default () => ({
    isLoading: true,
    mantenimientos: [
        {
            id: new Date().getTime(), //fecha en la que se guardó el registro
            placa: '1234ASD',
            date: new Date().toDateString(),
            text: 'Dolor enim laboris minim esse labore aliqua esse labore labore cupidatat velit est. Veniam velit et mollit cupidatat magna magna mollit ut commodo nisi nulla dolor. Deserunt ullamco cupidatat dolor laborum voluptate nostrud ut aute excepteur duis. Sit occaecat qui dolore do nostrud laboris est. Culpa mollit minim ut ut id tempor proident. Ut id velit veniam sint laboris irure. Aute adipisicing elit dolore elit dolor cupidatat veniam reprehenderit tempor.',
        },
        {
            id: new Date().getTime() + 1000, //fecha en la que se guardó el registro
            placa: '5696NKR',
            date: new Date().toDateString(),
            text: 'Cillum est ut veniam adipisicing. Culpa in sint mollit proident nisi laborum id enim nostrud. Commodo consectetur aute amet id qui proident. Do non sunt Lorem in sint est irure sit enim adipisicing. Sint do eiusmod sunt sit et.',
        },
        {
            id: new Date().getTime() + 10000, //fecha en la que se guardó el registro
            placa: '987qwer',
            date: new Date().toDateString(),
            text: 'Adipisicing veniam eu voluptate veniam nisi. Amet ullamco labore ullamco dolor veniam sint laborum est officia ad sint. Velit pariatur quis incididunt proident incididunt cillum laborum nostrud eiusmod officia exercitation nisi aliqua sint.',
        },
    ]
})