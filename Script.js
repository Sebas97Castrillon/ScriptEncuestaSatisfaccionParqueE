let tableEncuestas = base.getTable("Proy_Encuesta"); //seleccionamos la tabla "Proy_Encuesta"
console.log(tableEncuestas)
let tableConsolidado = base.getTable("Proy_ConsolidadoEncuesta");//seleccionamos la tabla "Proy_ConsolidadoEncuesta"
let query = await tableEncuestas.selectRecordsAsync({ fields: tableEncuestas.fields }); // traemos los valores de la tabla encuestas
let queryC = await tableConsolidado.selectRecordsAsync({ fields: tableConsolidado.fields });// traemos los valores de la tabla consolidado

let preguntas = ["1. ¿El servicio brindado cumple con las necesidades y expectativas?", "2. ¿La persona que brindó el servicio cuenta con los conocimientos requeridos para la prestación del servicio?", "3. ¿El servicio se suministro de manera oportuna?", "4. ¿La persona que le brindó el servicio estuvo dispuesta a resolver sus dudas?", "5. ¿Considera que el espacio donde se le prestó el servicio reúne las condiciones adecuadas para desarrollar la actividad.?", "6. ¿Si tuviera que dar una calificación total a la prestación del servicio, que calificación asignaría?"];

let valor1Pregunta1 = 0;
let valor2Pregunta1 = 0;
let valor3Pregunta1 = 0;
let valor4Pregunta1 = 0;
let valor5Pregunta1 = 0;

let totalesEncuesta = [0, 0, 0, 0, 0];

for (let pregunta of preguntas) {
    let totalR = totalRegistros(query.records, pregunta);
    let desvest = desviacionEstandar(query.records, totalR, pregunta);

    let datos = valores(query.records, pregunta)
    let porcen1 = datos[0] / query.records.length;
    let porcen2 = datos[1] / query.records.length;
    let porcen3 = datos[2] / query.records.length;
    let porcen4 = datos[3] / query.records.length;
    let porcen5 = datos[4] / query.records.length;
    let total1 = porcen1 + porcen2 + porcen3 + porcen4 + porcen5
    let calificacionPromedio = (porcen1 * 1) + (porcen2 * 2) + (porcen3 * 3) + (porcen4 * 4) + (porcen5 * 5)
    
    switch (pregunta) {
        case "1. ¿El servicio brindado cumple con las necesidades y expectativas?":
            for (let record of queryC.records) {
                if (record.name == "Muy Malo") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "1. ¿El servicio brindado cumple con las necesidades y expectativas?": porcen1
                    });
                    totalesEncuesta[0] += porcen1
                }
                if (record.name == "Malo") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "1. ¿El servicio brindado cumple con las necesidades y expectativas?": porcen2
                    });
                    totalesEncuesta[1] += porcen2
                }
                if (record.name == "Regular") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "1. ¿El servicio brindado cumple con las necesidades y expectativas?": porcen3
                    });
                    totalesEncuesta[2] += porcen3
                }
                if (record.name == "Bueno") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "1. ¿El servicio brindado cumple con las necesidades y expectativas?": porcen4
                    });
                    totalesEncuesta[3] += porcen4
                }
                if (record.name == "Excelente") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "1. ¿El servicio brindado cumple con las necesidades y expectativas?": porcen5
                    });
                    totalesEncuesta[4] += porcen5
                }
                if (record.name == "Total") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "1. ¿El servicio brindado cumple con las necesidades y expectativas?": total1
                    });
                }
                if (record.name == "Calificación Promedio") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "1. ¿El servicio brindado cumple con las necesidades y expectativas?": calificacionPromedio / 100
                    });
                }
                if (record.name == "Desviación Estándar") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "1. ¿El servicio brindado cumple con las necesidades y expectativas?": desvest / 100
                    });
                }
            }
            continue;
        case "2. ¿La persona que brindó el servicio cuenta con los conocimientos requeridos para la prestación del servicio?":
            for (let record of queryC.records) {
                if (record.name == "Muy Malo") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "2. ¿La persona que brindó el servicio cuenta con los conocimientos requeridos para la prestación del servicio?": porcen1
                    });
                    totalesEncuesta[0] += porcen1
                }
                if (record.name == "Malo") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "2. ¿La persona que brindó el servicio cuenta con los conocimientos requeridos para la prestación del servicio?": porcen2
                    });
                    totalesEncuesta[1] += porcen2
                }
                if (record.name == "Regular") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "2. ¿La persona que brindó el servicio cuenta con los conocimientos requeridos para la prestación del servicio?": porcen3
                    });
                    totalesEncuesta[2] += porcen3
                }
                if (record.name == "Bueno") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "2. ¿La persona que brindó el servicio cuenta con los conocimientos requeridos para la prestación del servicio?": porcen4
                    });
                    totalesEncuesta[3] += porcen4
                }
                if (record.name == "Excelente") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "2. ¿La persona que brindó el servicio cuenta con los conocimientos requeridos para la prestación del servicio?": porcen5
                    });
                    totalesEncuesta[4] += porcen5
                }
                if (record.name == "Total") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "2. ¿La persona que brindó el servicio cuenta con los conocimientos requeridos para la prestación del servicio?": total1
                    });
                }
                if (record.name == "Calificación Promedio") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "2. ¿La persona que brindó el servicio cuenta con los conocimientos requeridos para la prestación del servicio?": calificacionPromedio / 100
                    });
                }
                if (record.name == "Desviación Estándar") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "2. ¿La persona que brindó el servicio cuenta con los conocimientos requeridos para la prestación del servicio?": desvest / 100
                    });
                }
            }
            continue;
        case "3. ¿El servicio se suministro de manera oportuna?":
            for (let record of queryC.records) {
                if (record.name == "Muy Malo") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "3. ¿El servicio se suministro de manera oportuna?": porcen1
                    });
                    totalesEncuesta[0] += porcen1
                }
                if (record.name == "Malo") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "3. ¿El servicio se suministro de manera oportuna?": porcen2
                    });
                    totalesEncuesta[1] += porcen2
                }
                if (record.name == "Regular") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "3. ¿El servicio se suministro de manera oportuna?": porcen3
                    });
                    totalesEncuesta[2] += porcen3
                }
                if (record.name == "Bueno") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "3. ¿El servicio se suministro de manera oportuna?": porcen4
                    });
                    totalesEncuesta[3] += porcen4
                }
                if (record.name == "Excelente") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "3. ¿El servicio se suministro de manera oportuna?": porcen5
                    });
                    totalesEncuesta[4] += porcen5
                }
                if (record.name == "Total") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "3. ¿El servicio se suministro de manera oportuna?": total1
                    });
                }
                if (record.name == "Calificación Promedio") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "3. ¿El servicio se suministro de manera oportuna?": calificacionPromedio / 100
                    });
                }
                if (record.name == "Desviación Estándar") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "3. ¿El servicio se suministro de manera oportuna?": desvest / 100
                    });
                }
            }
            continue;
        case "4. ¿La persona que le brindó el servicio estuvo dispuesta a resolver sus dudas?":
            for (let record of queryC.records) {
                if (record.name == "Muy Malo") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "4. ¿La persona que le brindó el servicio estuvo dispuesta a resolver sus dudas?": porcen1
                    });
                    totalesEncuesta[0] += porcen1
                }
                if (record.name == "Malo") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "4. ¿La persona que le brindó el servicio estuvo dispuesta a resolver sus dudas?": porcen2
                    });
                    totalesEncuesta[1] += porcen2
                }
                if (record.name == "Regular") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "4. ¿La persona que le brindó el servicio estuvo dispuesta a resolver sus dudas?": porcen3
                    });
                    totalesEncuesta[2] += porcen3
                }
                if (record.name == "Bueno") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "4. ¿La persona que le brindó el servicio estuvo dispuesta a resolver sus dudas?": porcen4
                    });
                    totalesEncuesta[3] += porcen4
                }
                if (record.name == "Excelente") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "4. ¿La persona que le brindó el servicio estuvo dispuesta a resolver sus dudas?": porcen5
                    });
                    totalesEncuesta[4] += porcen5
                }
                if (record.name == "Total") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "4. ¿La persona que le brindó el servicio estuvo dispuesta a resolver sus dudas?": total1
                    });
                }
                if (record.name == "Calificación Promedio") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "4. ¿La persona que le brindó el servicio estuvo dispuesta a resolver sus dudas?": calificacionPromedio / 100
                    });
                }
                if (record.name == "Desviación Estándar") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "4. ¿La persona que le brindó el servicio estuvo dispuesta a resolver sus dudas?": desvest / 100
                    });
                }
            }
            continue;
        case "5. ¿Considera que el espacio donde se le prestó el servicio reúne las condiciones adecuadas para desarrollar la actividad.?":
            for (let record of queryC.records) {
                if (record.name == "Muy Malo") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "5. ¿Considera que el espacio donde se le prestó el servicio reúne las condiciones adecuadas para desarrollar la actividad.?": porcen1
                    });
                    totalesEncuesta[0] += porcen1
                }
                if (record.name == "Malo") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "5. ¿Considera que el espacio donde se le prestó el servicio reúne las condiciones adecuadas para desarrollar la actividad.?": porcen2
                    });
                    totalesEncuesta[1] += porcen2
                }
                if (record.name == "Regular") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "5. ¿Considera que el espacio donde se le prestó el servicio reúne las condiciones adecuadas para desarrollar la actividad.?": porcen3
                    });
                    totalesEncuesta[2] += porcen3
                }
                if (record.name == "Bueno") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "5. ¿Considera que el espacio donde se le prestó el servicio reúne las condiciones adecuadas para desarrollar la actividad.?": porcen4
                    });
                    totalesEncuesta[3] += porcen4
                }
                if (record.name == "Excelente") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "5. ¿Considera que el espacio donde se le prestó el servicio reúne las condiciones adecuadas para desarrollar la actividad.?": porcen5
                    });
                    totalesEncuesta[4] += porcen5
                }
                if (record.name == "Total") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "5. ¿Considera que el espacio donde se le prestó el servicio reúne las condiciones adecuadas para desarrollar la actividad.?": total1
                    });
                }
                if (record.name == "Calificación Promedio") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "5. ¿Considera que el espacio donde se le prestó el servicio reúne las condiciones adecuadas para desarrollar la actividad.?": calificacionPromedio / 100
                    });
                }
                if (record.name == "Desviación Estándar") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "5. ¿Considera que el espacio donde se le prestó el servicio reúne las condiciones adecuadas para desarrollar la actividad.?": desvest / 100
                    });
                }
            }
            continue;
        case "6. ¿Si tuviera que dar una calificación total a la prestación del servicio, que calificación asignaría?":
            for (let record of queryC.records) {
                if (record.name == "Muy Malo") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "6. ¿Si tuviera que dar una calificación total a la prestación del servicio, que calificación asignaría?": porcen1
                    });
                    totalesEncuesta[0] += porcen1
                }
                if (record.name == "Malo") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "6. ¿Si tuviera que dar una calificación total a la prestación del servicio, que calificación asignaría?": porcen2
                    });
                    totalesEncuesta[1] += porcen2
                }
                if (record.name == "Regular") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "6. ¿Si tuviera que dar una calificación total a la prestación del servicio, que calificación asignaría?": porcen3
                    });
                    totalesEncuesta[2] += porcen3
                }
                if (record.name == "Bueno") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "6. ¿Si tuviera que dar una calificación total a la prestación del servicio, que calificación asignaría?": porcen4
                    });
                    totalesEncuesta[3] += porcen4
                }
                if (record.name == "Excelente") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "6. ¿Si tuviera que dar una calificación total a la prestación del servicio, que calificación asignaría?": porcen5
                    });
                    totalesEncuesta[4] += porcen5
                }
                if (record.name == "Total") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "6. ¿Si tuviera que dar una calificación total a la prestación del servicio, que calificación asignaría?": total1
                    });
                }
                if (record.name == "Calificación Promedio") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "6. ¿Si tuviera que dar una calificación total a la prestación del servicio, que calificación asignaría?": calificacionPromedio / 100
                    });
                }
                if (record.name == "Desviación Estándar") {
                    await tableConsolidado.updateRecordAsync(record, {
                        "6. ¿Si tuviera que dar una calificación total a la prestación del servicio, que calificación asignaría?": desvest / 100
                    });
                }
            }
            continue;
        default:
            break;
    }
}
console.log(totalesEncuesta[0])
console.log("Total",(totalesEncuesta[0]/6),"-", (totalesEncuesta[1] / 6),"-", (totalesEncuesta[2] / 6),"-", (totalesEncuesta[3] / 6),"-",(totalesEncuesta[4] / 6));
var calificacionPromedio = parseFloat(((totalesEncuesta[0]/6) + (totalesEncuesta[1]/6) +  (totalesEncuesta[2] / 6) + (totalesEncuesta[3] / 6) + (totalesEncuesta[4] / 6)).toFixed(3));
console.log()
for (let record of queryC.records) {
    let totalEncuesta = (totalesEncuesta[0] + totalesEncuesta[1] + totalesEncuesta[2] + totalesEncuesta[3] + totalesEncuesta[4]) / 6;
    if (record.name == "Muy Malo") {
        await tableConsolidado.updateRecordAsync(record, {
            "Promedio / Encuesta": totalesEncuesta[0] / 6
        });
        
    }
    if (record.name == "Malo") {
        await tableConsolidado.updateRecordAsync(record, {
            "Promedio / Encuesta": totalesEncuesta[1] / 6
        });
    }
    if (record.name == "Regular") {
        await tableConsolidado.updateRecordAsync(record, {
            "Promedio / Encuesta": totalesEncuesta[2] / 6
        });
    }
    if (record.name == "Bueno") {
        await tableConsolidado.updateRecordAsync(record, {
            "Promedio / Encuesta": totalesEncuesta[3] / 6
        });
    }
    if (record.name == "Excelente") {
        await tableConsolidado.updateRecordAsync(record, {
            "Promedio / Encuesta": totalesEncuesta[4] / 6
        });
    }
    if (record.name == "Total") {
        await tableConsolidado.updateRecordAsync(record, {
            "Promedio / Encuesta": totalEncuesta
        });
    }
    
    if (record.name == "Calificación Promedio") {
        await tableConsolidado.updateRecordAsync(record, {
            "Promedio / Encuesta": calificacionPromedio
        });
    }
}


function valores(records, pregunta) {
    let valores = [0, 0, 0, 0, 0]
    for (let record of records) {
        if (record.getCellValue(pregunta).name == "1") {
            valores[0] += 1;
        } else if (record.getCellValue(pregunta).name == "2") {
            valores[1] += 1;
        } else if (record.getCellValue(pregunta).name == "3") {
            valores[2] += 1;
        } else if (record.getCellValue(pregunta).name == "4") {
            valores[3] += 1;
        } else if (record.getCellValue(pregunta).name == "5") {
            valores[4] += 1;
        }
    }
    // console.log(valores[1])

    return valores;
}


function desviacionEstandar(records, totalRegistros, pregunta) {
    let varianza = 0;
    let sumatoria = 0;
    let resultado = 0;

    for (let record of records) {
        varianza = parseInt(record.getCellValue(pregunta).name) - totalRegistros / records.length;
        sumatoria += Math.pow(varianza, 2);
    }
    resultado = sumatoria / (query.records.length - 1);
    resultado = Math.sqrt(resultado)
    return resultado;
}

function totalRegistros(records, pregunta) {
    let total = 0;
    for (let record of records) {
        total += parseInt(record.getCellValue(pregunta).name);
    }
    return total;
}

