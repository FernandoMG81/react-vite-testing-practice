import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp"
import heroes from "../../src/data/heroes"

describe('Prueba en 08-imp-export', () => { 
  test('getHeroeById debe retornar un heroe por ID', () => { 
    const id = 1
    const hero = getHeroeById(id)

    expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
   })


   test('getHeroeById debe retornar undefined si no existe el ID', () => { 
    const id = 100
    const hero = getHeroeById(id)

    expect(hero).toBeFalsy()
   })


   test('debe retornar un arreglo con los héroes de DC', () => { 
    const DCHeros = [
      {
        id: 1,
        name: 'Batman',
        owner: 'DC'
      },
      {
          id: 3,
          name: 'Superman',
          owner: 'DC'
      },
      {
          id: 4,
          name: 'Flash',
          owner: 'DC'
      }
    ]

    const testDCHeros = getHeroesByOwner('DC')

    expect( DCHeros ).toEqual(testDCHeros)
    expect( testDCHeros.length ).toBe(3)
          
  })

  test('debe retornar un arreglo con los héroes de Marvel', () => { 
   
    const owner = "Marvel"
    const testHeros = getHeroesByOwner(owner)

    expect( testHeros.length ).toBe(2)
    expect( testHeros ).toEqual( heroes.filter(heroe => heroe.owner === owner))
          
  })
 })