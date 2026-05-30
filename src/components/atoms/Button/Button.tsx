import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
