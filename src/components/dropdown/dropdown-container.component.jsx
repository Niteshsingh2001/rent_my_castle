export default function DropdownContainer({ children, ...otherProps }) {
    return (
        <div {...otherProps}>
            {children}
        </div>
    )
}
