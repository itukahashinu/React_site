interface FooterSectionProps {
  title: string
  items: Array<{
    name: string
    href: string | null
  }>
}

export function FooterSection({ title, items }: FooterSectionProps) {
  return (
    <div>
      <h4 
        className="text-lg font-bold mb-6 pb-2 border-b border-gray-200 inline-block relative after:absolute after:bottom-[-2px] after:left-0 after:w-10 after:h-0.5 after:bg-[#4361ee]"
        id={`footer-${title}`}
      >
        {title}
      </h4>
      <ul 
        className="space-y-3"
        role="menu"
        aria-labelledby={`footer-${title}`}
      >
        {items.map((item, index) => (
          <li key={index} role="none">
            {item.href ? (
              <a
                href={item.href}
                className="text-gray-500 hover:text-[#4361ee] transition-colors relative inline-block after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-px after:bg-[#4361ee] hover:after:w-full after:transition-all"
                role="menuitem"
              >
                {item.name}
              </a>
            ) : (
              <span className="text-gray-400" role="menuitem">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
