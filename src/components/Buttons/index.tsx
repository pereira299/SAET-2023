interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    className: string;
    children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
    return (
        <button className={`${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;