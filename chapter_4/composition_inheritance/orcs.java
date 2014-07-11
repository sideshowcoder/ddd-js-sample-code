interface Orc {
    abstract public String kill(String attacker);
}

class SwordMaster implements Orc {
    public String kill(String name) {
        return "Slash " + name;
    }
}

class AxeMaster implements Orc {
    public String kill(String name) {
        return "Split " + name;
    }
}

class Master {
    Orc[] guards;
    public Master(Orc[] guards) {
       this.guards = guards;
    }

    public void figthOfAttack(String[] attackers) {
        for(int i = 0; i < attackers.length; i++) {
            System.out.println(guards[i].kill(attackers[i]));
        }
    }
}

class Main {
    public static void main(String... args) {
        Orc[] guards = { new SwordMaster(), new AxeMaster() };
        Master master = new Master(guards);
        String[] attackers = { "goblin", "human" };
        master.figthOfAttack(attackers);
    }
}
