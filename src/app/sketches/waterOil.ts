import p5 from 'p5';

// Define your constants and global variables
const R = 5;
const FORCE_RANGE = 10 * R;
const WALL_FORCE_RANGE = 2 * R;
let FORCE_MAGNITUDE = 1;
let WALL_FORCE_MAGNITUDE = 0.1;
let WATER = 0;
let HYDROPHOBIC = 1;
let MAX_SPEED = 0.3 * R;
let atoms: Atom[] = [];
let N_ATOMS: number;

// Class for Atoms
class Atom {
  position: p5.Vector;
  velocity: p5.Vector;
  acceleration: p5.Vector;
  type: number;

  constructor(t: number, p: p5) {
    this.position = p.createVector(p.random(p.width), p.random(p.height));
    this.velocity = p.createVector(p.random(-3, 3), p.random(-3, 3));
    this.acceleration = p.createVector();
    this.type = t;
  }

  drawAtom(p: p5) {
    switch (this.type) {
      case WATER:
        p.fill(p.color(14, 165, 233));
        break;
      case HYDROPHOBIC:
        p.fill(p.color(255, 0, 0));
        break;
      default:
        p.fill(p.color(14, 165, 233));
        break;
    }
    p.ellipse(this.position.x, this.position.y, Math.max(5, R), Math.max(5, R));
  }
}

// The main p5 sketch
const mySketch = (p: p5) => {
  // Setup function
  p.setup = () => {
    p.createCanvas(400, 400, p.P2D);
    N_ATOMS = Math.floor(p.width * p.height / (R * 60));
    for (let i = 0; i < N_ATOMS; i++) {
      const atomType = i % 5 === 0 ? HYDROPHOBIC : WATER;
      atoms.push(new Atom(atomType, p));
    }
    p.noStroke();
  };

  // Draw function
  p.draw = () => {
    computeAcc(p);
    computeVel();
    computePos(p);

    p.background(p.color(103, 232, 249));

    for (const atom of atoms) {
      atom.drawAtom(p);
    }

    p.fill(p.color(14, 165, 233));
    p.ellipse(p.mouseX, p.mouseY, Math.max(4, R), Math.max(4, R));
  };

  // Compute acceleration for atoms
  const computeAcc = (p: p5) => {
    // Reset accelerations
    for (const atom of atoms) {
      atom.acceleration.set(0, 0);
    }

    let d: number, f: number;
    const force = p.createVector();
    const to = p.createVector();

    // Inter-atom forces
    for (let i = 0; i < atoms.length; i++) {
      for (let j = i + 1; j < atoms.length; j++) {
        to.set(p5.Vector.sub(atoms[i].position, atoms[j].position));
        d = to.mag();

        if (d < FORCE_RANGE) {
          f =
            atoms[i].type !== atoms[j].type
              ? repulsionForce(FORCE_RANGE, d, FORCE_MAGNITUDE)
              : repulsionForce(WALL_FORCE_RANGE, d, WALL_FORCE_MAGNITUDE);
          force.set(to.copy().mult(f));
          atoms[i].acceleration.add(force);
          atoms[j].acceleration.sub(force);
        }
      }

      // Wall repulsion logic
      for (let wallTest = 0; wallTest < 4; wallTest++) {
        let wall: p5.Vector = p.createVector(0, 0);

        // Determine which wall is being checked
        switch (wallTest) {
          case 0:
            wall.set(0, atoms[i].position.y); // Left wall
            break;
          case 1:
            wall.set(p.width, atoms[i].position.y); // Right wall
            break;
          case 2:
            wall.set(atoms[i].position.x, 0); // Top wall
            break;
          case 3:
            wall.set(atoms[i].position.x, p.height); // Bottom wall
            break;
        }

        to.set(p5.Vector.sub(atoms[i].position, wall));
        f = repulsionForce(WALL_FORCE_RANGE, to.mag(), WALL_FORCE_MAGNITUDE);

        // Apply repulsion force towards the wall if the atom is close enough
        if (f !== 0) {
          force.set(to.copy().mult(f));
          atoms[i].acceleration.add(force);
        }
      }

      // Mouse cursor repulsion as another water molecule
      to.set(p5.Vector.sub(atoms[i].position, p.createVector(p.mouseX, p.mouseY)));
      d = to.mag();
      if (d < FORCE_RANGE) {
        f =
          atoms[i].type === HYDROPHOBIC
            ? repulsionForce(FORCE_RANGE, d, FORCE_MAGNITUDE)
            : repulsionForce(WALL_FORCE_RANGE, d, WALL_FORCE_MAGNITUDE);
        force.set(to.copy().mult(f));
        atoms[i].acceleration.add(force);
      }
    }
  };

  // Compute velocities based on accelerations
  const computeVel = () => {
    for (const atom of atoms) {
      atom.velocity.add(atom.acceleration).limit(MAX_SPEED);
    }
  };

  // Compute positions based on velocities
  const computePos = (p: p5) => {
    for (const atom of atoms) {
      atom.position.add(atom.velocity);
      if (atom.position.x < 0) atom.position.x = WALL_FORCE_RANGE;
      if (atom.position.x > p.width) atom.position.x = p.width - WALL_FORCE_RANGE;
      if (atom.position.y < 0) atom.position.y = WALL_FORCE_RANGE;
      if (atom.position.y > p.height) atom.position.y = p.height - WALL_FORCE_RANGE;
    }
  };

  // Repulsion force calculation
  const repulsionForce = (range: number, d: number, magnitude: number): number => {
    d = Math.max(d, 0.1);
    if (d < range) {
      return magnitude * (range / d - 1);
    } else {
      return 0;
    }
  };
};

export default mySketch;
