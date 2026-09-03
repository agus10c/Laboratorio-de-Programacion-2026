// 1. Componente Base
interface Arma {
    String getDescripcion();
    int getDanio();
}

// 2. Componente Concreto
class EspadaBasica implements Arma {
    @Override
    public String getDescripcion() { return "Espada de Hierro"; }

    @Override
    public int getDanio() { return 15; }
}

// 3. Decorador Abstracto
abstract class ModificadorArma implements Arma {
    protected Arma armaDecorada;

    public ModificadorArma(Arma arma) {
        this.armaDecorada = arma;
    }

    @Override
    public String getDescripcion() { return armaDecorada.getDescripcion(); }

    @Override
    public int getDanio() { return armaDecorada.getDanio(); }
}

// 4. Decoradores Concretos
class EncantamientoFuego extends ModificadorArma {
    public EncantamientoFuego(Arma arma) { super(arma); }

    @Override
    public String getDescripcion() {
        return armaDecorada.getDescripcion() + " + Encantamiento de Fuego";
    }

    @Override
    public int getDanio() {
        return armaDecorada.getDanio() + 10;
    }
}

class GemasVampiricas extends ModificadorArma {
    public GemasVampiricas(Arma arma) { super(arma); }

    @Override
    public String getDescripcion() {
        return armaDecorada.getDescripcion() + " + Gemas Vampíricas";
    }

    @Override
    public int getDanio() {
        return armaDecorada.getDanio() + 5;
    }
}

// 5. Ejecución para la Exposición
class MainDecorator {
    public static void main(String[] args) {
        // Creamos un arma base
        Arma espada = new EspadaBasica();
        System.out.println(espada.getDescripcion() + " -> Daño: " + espada.getDanio());

        // La decoramos dinámicamente con Fuego
        espada = new EncantamientoFuego(espada);

        // La volvemos a decorar agregándole Gemas Vampíricas
        espada = new GemasVampiricas(espada);

        System.out.println(espada.getDescripcion() + " -> Daño Total: " + espada.getDanio());
    }
}