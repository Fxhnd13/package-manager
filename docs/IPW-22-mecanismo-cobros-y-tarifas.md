# Investigación – Definición del Mecanismo de Cobros y Tarifas  
**Proyecto:** Package Manager
**Clave Jira:** IPW-22  
**Responsable:** Enrique  Hernandez kik3.h

---

## 1. Introducción

El presente documento tiene como objetivo definir el mecanismo de cobros y tarifas del proyecto **package-manager** una plataforma orientada a la gestión, envío y administración de paquetes a través de múltiples puntos de control. Esta investigación establece un modelo claro de precios que permita cubrir los costos operativos del sistema, generar ganancias sostenibles y ofrecer transparencia tanto a los usuarios como a los administradores.basada en costos de las plataformas existentes

La correcta definición de tarifas es un componente clave para garantizar la viabilidad del negocio, facilitar la generación de reportes administrativos y apoyar la toma de decisiones estratégicas relacionadas con la optimización de recursos y la escalabilidad del sistema.

---

## 2. Tipos de tarifas existentes

En el sistema **package-manager** se identifican los siguientes tipos de tarifas y cobros:

### 2.1 Tarifa base por envío de paquetes

Todo paquete registrado en el sistema tiene una tarifa base definida según su peso:

| Peso del paquete | Tarifa base |
|------------------|------------|
| 0 – 2 kg         | Q25.00     |
| 2.1 – 5 kg       | Q40.00     |
| 5.1 – 10 kg      | Q65.00     |
| Más de 10 kg     | Q90.00     |

Esta tarifa cubre la gestión inicial del paquete y su registro en el sistema.

---

### 2.2 Tarifas por distancia

Se aplica un cargo adicional dependiendo de la distancia entre los puntos de control:

| Distancia |                    Cargo adicional |
|----------|----------------    |
| Local (misma ciudad)          | Q10.00 |
| Regional (mismo departamento) | Q20.00 |
| Nacional                      | Q35.00 |

---

### 2.3 Tarifas por servicios adicionales

El sistema permite contratar servicios complementarios que generan cobros adicionales:

| Servicio                          | Costo |
|--------|-------|
| Seguro básico (hasta Q1,000)      | Q10.00 |
| Seguro extendido (hasta Q5,000)   | Q25.00 |
| Entrega express                   | Q30.00 |
| Manejo especial (paquetes frágiles o de alto valor) | Q20.00 |
| Notificaciones avanzadas de seguimiento | Q5.00 |

---

### 2.4 Suscripción premium

Se ofrece una modalidad de suscripción premium para usuarios frecuentes o empresas:

| Plan | Precio | Beneficios |
|----|--------|-----------|
| Mensual     | Q99.00 | 10% de descuento en envíos, reportes detallados |
| Anual       | Q999.00 | 15% de descuento, prioridad en envíos y soporte |

---

### 2.5 Descuentos y promociones

El sistema puede aplicar descuentos automáticos bajo las siguientes condiciones:

| Condición | Descuento |
|---------|-----------|
| Más de 10 envíos al mes | 5% |
| Más de 30 envíos al mes | 10% |
| Usuarios con plan premium | Hasta 15% |
| Promociones temporales | 5% – 20% |

---

## 3. Mecanismo de cobro

### 3.1 Momento del cobro

- **Registro de envío:** el cobro se realiza de forma inmediata al registrar el paquete.
- **Suscripción premium:** cobro anticipado mensual o anual.
- **Servicios adicionales:** se cobran junto con la tarifa base del envío.
- **Ajustes posteriores:** cargos adicionales si el usuario modifica el servicio contratado.

---

### 3.2 Medios de pago

El sistema admite los siguientes métodos de pago:
- Tarjeta de crédito y débito
- Billetera virtual del sistema
- Saldo precargado
- Facturación empresarial (usuarios corporativos)

---

### 3.3 Flujo del dinero

1. El usuario realiza el pago a la plataforma **package-manager**.
2. El sistema registra la transacción y genera un comprobante.
3. El monto se distribuye entre costos operativos y ganancia neta.
4. La información se almacena para reportes administrativos y auditorías.

---

## 4. Dinámica del negocio

### 4.1 Generación de ingresos

La plataforma obtiene ingresos a través de:
- Tarifas por envío de paquetes
- Servicios adicionales
- Suscripciones premium
- Penalizaciones por cancelaciones tardías o incumplimientos

---

### 4.2 Distribución de ingresos

El total recaudado se distribuye de la siguiente forma:

| Concepto | Porcentaje |
|-------|-----------|
| Costos operativos | 55% |
| Ganancia neta de la plataforma | 45% |

---

### 4.3 Costos operativos cubiertos (55%)

- Infraestructura tecnológica (servidores y base de datos): 20%
- Personal operativo y soporte: 20%
- Mantenimiento y mejoras del sistema: 10%
- Marketing y promociones: 5%

---

### 4.4 Liquidación y reportes

El sistema genera reportes automáticos que incluyen:
- Ingresos diarios, mensuales y anuales
- Costos operativos detallados
- Ganancias netas
- Historial de pagos y envíos por usuario

---

### 4.5 Casos especiales

**Reembolsos**
- 100% si el paquete no fue procesado.
- 50% si el envío ya inició tránsito.
- 0% si el paquete fue entregado.

**Cancelaciones**
- Cancelación temprana: sin penalización.
- Cancelación tardía: penalización del 20% del costo total.

**Pérdida o daño**
- Reembolso conforme al seguro contratado.
- Monto máximo según cobertura seleccionada.

---

## 5. Sugerencias y mejoras

### 5.1 Tarifas escalonadas y dinámicas
- Ajustes automáticos según volumen de envíos y temporada.
- Beneficios progresivos para clientes frecuentes.

### 5.2 Promociones temporales
- Campañas en fechas estratégicas para aumentar la demanda.

### 5.3 Programas de fidelización
- Acumulación de puntos por envío.
- 1 envío gratuito cada 20 envíos realizados.

### 5.4 Incentivos empresariales
- Contratos corporativos con tarifas preferenciales.
- Facturación mensual consolidada.

### 5.5 Transparencia y control
- Panel de usuario con desglose detallado de costos.
- Historial completo de pagos.
- Exportación de reportes en PDF y CSV

---

## 6. Conclusiones

El modelo de cobros y tarifas propuesto para **package-manager** establece reglas claras, montos definidos y porcentajes bien distribuidos que permiten una operación sostenible del sistema. La combinación de tarifas base, servicios adicionales, descuentos y suscripciones premium asegura ingresos constantes y control financiero.

Este esquema contribuye a la escalabilidad del proyecto, fortalece la confianza de los usuarios y se alinea con los objetivos de optimización de recursos y buenas prácticas de desarrollo de software.