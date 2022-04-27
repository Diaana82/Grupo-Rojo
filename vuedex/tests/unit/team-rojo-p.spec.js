import { suma, resta} from  "./team-rojo";

describe('Comparar valores (:',() => {

  test('Comprobación resultado suma', ()  => {
    expect(suma(-5,6)).toBe(1)
  });

  test('Comprobación resultado resta', ()  => {
    expect(resta(5,-3)).toBe(8)
  });

  /*
  test('Calidad de la espinaca', ()  => {
    expect(suma()).toEqual({
      estado: 1,
      color: "verde",
    })
  });
  */
})