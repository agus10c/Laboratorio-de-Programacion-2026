import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Random;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class MonitoreoArduino {

    // Simula la lectura por puerto serie/USB desde la placa Arduino
    private static double leerSensorArduino() {
        try {
            // Simula latencia de comunicación serial (ej. 300 ms)
            Thread.sleep(300);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        // Retorna un valor aleatorio simulando un sensor tipo DHT11 / LM35
        return 20.0 + new Random().nextDouble() * 15.0;
    }

    public static void main(String[] args) {
        // Pool con un hilo dedicado para tareas programadas
        ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HH:mm:ss");

        Runnable tareaLectura = () -> {
            String hora = LocalTime.now().format(formatter);
            double temp = leerSensorArduino();
            
            System.out.printf("[%s] Arduino (COM3) -> Temperatura: %.2f °C\n", hora, temp);

            // Alerta si supera un umbral crítico
            if (temp > 30.0) {
                System.out.println("  >>> [ALERTA]: Sobrecalentamiento detectado.");
            }
        };

        System.out.println("Iniciando conexión con Arduino y muestreo periódico...");

        // Parámetros:
        // 1. Tarea a ejecutar
        // 2. Initial Delay: Espera 1 segundo para estabilizar la conexión
        // 3. Period: Ejecuta cada 2 segundos exactos (Fixed Rate)
        // 4. Unidad: TimeUnit.SECONDS
        scheduler.scheduleAtFixedRate(tareaLectura, 1, 2, TimeUnit.SECONDS);

        // Apagar el scheduler automáticamente tras 10 segundos para finalizar la demostración
        scheduler.schedule(() -> {
            System.out.println("\nFinalizando monitoreo y liberando puerto...");
            scheduler.shutdown();
        }, 10, TimeUnit.SECONDS);
    }
}