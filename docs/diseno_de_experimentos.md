# Diseño de los experimentos

Dos MVPs, cada uno con un test A/B y un test multivariado. Todas las variantes comparten precio, estética y flujo, para que la única diferencia sea la variable que se quiere medir.

## MVP 1, landing page

Pregunta: ¿qué información necesita ver alguien para avanzar con la compra de un pack de leña de $350?

| Variante | Qué cambia | Qué mide |
|---|---|---|
| A, control | Solo producto y precio | Línea de base de intención de compra |
| B | Suma la elección de horario de entrega | Peso de poder coordinar la entrega |
| M1 | Horario y foto del producto | Si ver la leña genera más confianza |
| M2 | Horario y reseñas verificadas | Si la prueba social genera más confianza |

La conversión se registra cuando la persona toca **Continuar** y llega a la pantalla de confirmación ("Tu intención quedó registrada").

## MVP 2, mockup de la app

Pregunta: ¿cuánta visibilidad del envío espera el usuario después de pedir?

Flujo común: elegir pack (20 kg a $350 o 40 kg a $650), zona (Montevideo o Canelones), horario y confirmar.

| Variante | Pantalla final | Qué mide |
|---|---|---|
| A, control | Solo "Pedido confirmado" | Línea de base |
| B | Estado de tracking "En camino" | Valor del seguimiento |
| M1 | Tracking y foto del repartidor | Confianza por saber quién entrega |
| M2 | Tracking y hora exacta de llegada | Valor de la precisión horaria |

## Medición

- Netlify Analytics para visitas y rendimiento de carga.
- Encuestas y entrevistas para entender el porqué detrás de cada resultado.
