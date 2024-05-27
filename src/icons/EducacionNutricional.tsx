interface Props extends React.SVGAttributes<SVGElement> {}

function EducacionNutricional({ ...SVGProps }: Props) {
  return (
    <svg
      {...SVGProps}
      viewBox="0 0 68 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.4106 0.974365L0 42.2519V48.9074H6.51563L46.9262 7.62993L40.4106 0.974365Z"
        fill="#89F1A6"
      />
      <path d="M67.3981 52.9405H0V56.9743H67.3981V52.9405Z" fill="#89F1A6" />
      <path
        d="M67.3981 44.8737H19.7455V48.9075H67.3981V44.8737Z"
        fill="#89F1A6"
      />
    </svg>
  );
}

export default EducacionNutricional;
