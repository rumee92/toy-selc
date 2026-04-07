import styles from './Button.module.css';

type Variant = 'solid' | 'outline' | 'text' | 'icon';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  color?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'solid',
  size = 'md',
  color,
  className,
  children,
  ...props
}: ButtonProps) {
  const cls = [
    styles['btn'],
    styles[`btn-${variant}`],
    styles[`btn-${size}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={cls} style={{ color, ...props.style }} {...props}>
      {children}
    </button>
  );
}
