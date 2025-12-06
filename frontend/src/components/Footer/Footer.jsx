export default function Footer() {
  return (
    <footer
      className="
        mt-10 py-4
        text-center
        text-xs
        text-rd-textSecondary dark:text-rd-textDarkSecondary
      "
    >
      Feito com ❤️ por{" "}
      <span className="font-medium">
        Beatriz Gomes © {new Date().getFullYear()}
      </span>
    </footer>
  );
}
