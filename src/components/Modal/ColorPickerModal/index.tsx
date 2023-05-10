import { ColorList } from "src/utils/helper";
import { StyledColorPickerModal } from "./styles";
import ColorButton from "./ColorButton";

const colorList = ColorList;
function ColorPickerModal({
  closeModal,
  assignSubjectColor,
}: {
  closeModal: () => void;
  assignSubjectColor: (color: string) => void;
}) {
  const handleClickModal = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  return (
    <StyledColorPickerModal onClick={handleClickModal}>
      <div>
        {colorList.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((color, index) => (
              <ColorButton
                key={index}
                color={color}
                closeModal={closeModal}
                assignSubjectColor={assignSubjectColor}
              ></ColorButton>
            ))}
          </div>
        ))}
      </div>
    </StyledColorPickerModal>
  );
}

export default ColorPickerModal;
