import { StyledColorButton } from './styles';

const ColorButton = ({
  color,
  closeModal,
  assignSubjectColor,
}: {
  color: string;
  closeModal: () => void;
  assignSubjectColor: (e: string) => void;
}) => {
  const handleOnClickButton: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    assignSubjectColor(color);
    closeModal();
  };
  return (
    <StyledColorButton
      color={color}
      onClick={handleOnClickButton}
    ></StyledColorButton>
  );
};
export default ColorButton;
