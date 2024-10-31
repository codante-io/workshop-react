function Navbar() {
  const frutas = ["banana", "maçã", "laranja", "manga", "melão"];

  return (
    <div>{frutas.filter((fruta) => fruta.startsWith("m")).join(", ")}</div>
  );
}

export default Navbar;
