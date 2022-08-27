# Modificar estado

Crea un proyecto de react usando Create React App y en el componente principal (`App`) crea una variable de estado usando `useState` que contenga este valor inicial:

```js
[{
  id: 1
  task: 'Ir a la compra',
  done: false
},
{
  id: 2,
  task: 'Hacer ejercicios de react',
  done: true
}]
```

Crea y añade a `App.js` un componente llamado `Lista` y pásale el estado anterior como `prop`.

El componente `Lista` debe renderizar un `<ul>` y debe mostrar cada uno de los elementos del array del estado de `App` como un `<li>`. Los elementos que tengan la propiedad `done` con valor `true` deben mostrar el texto tachado.
