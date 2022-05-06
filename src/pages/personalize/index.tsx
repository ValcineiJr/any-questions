import { Button } from '@components/Button';
import { ButtonItem } from '@components/Button/styles';
import { ContactButton } from '@components/ContactButton';
import { SketchPicker } from 'react-color';
import { Header } from '@components/Header';
import Modal from '@components/Modal';
import { SelectComponent } from '@components/SelectComponent';
import { TitleItem } from '@components/Title/styles';
import {
  folderFour,
  folderOne,
  folderThree,
  folderTwo,
} from '@utils/dummyData';
import { useState } from 'react';
import {
  AiOutlineMail as MailIcon,
  AiFillCar,
  AiFillPhone,
  AiOutlineWhatsApp,
} from 'react-icons/ai';
import {
  Container,
  PackageContainer,
  ModalContainer,
} from '../../styles/pages/personalize';
import { useUser } from '@hooks/useUser';

interface FolderProps {
  folderName: string;
  indice: number;
}

export default function Personalize() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedIconFolder, setSelectedIconFolder] = useState(
    'Selecione um pacote'
  );
  const [selectedFolder, setSelectedFolder] = useState<FolderProps | null>(
    null
  );
  const packageIcons = [
    { id: '0', folderName: 'Um', icon: MailIcon, pack: folderOne },
    { id: '1', folderName: 'Dois', icon: AiFillCar, pack: folderTwo },
    { id: '2', folderName: 'Tres', icon: AiFillPhone, pack: folderThree },
    {
      id: '3',
      folderName: 'Quatro',
      icon: AiOutlineWhatsApp,
      pack: folderFour,
    },
  ];

  function handleToggleModal() {
    setIsOpen((state) => !state);
  }

  function handleSelectedFolder(folderName: string, indice: number) {
    setSelectedFolder({ folderName, indice });
  }

  function handleSelectIconFolder() {
    setSelectedIconFolder(selectedFolder.folderName);
    setSelectedFolder(null);
    setIsOpen(false);
  }

  function onBackDropPress() {
    setSelectedFolder(null);
    setIsOpen(false);
  }

  function onClose() {
    if (!selectedFolder) setIsOpen(false);
    else {
      setSelectedFolder(null);
    }
  }

  const { mainColor, setMainScolor } = useUser();

  return (
    <>
      <Header />
      <Container>
        <Modal
          show={modalIsOpen}
          onBackDropPress={onBackDropPress}
          onClose={onClose}
          title={selectedFolder ? selectedFolder.folderName : null}
        >
          <ModalContainer>
            {!selectedFolder ? (
              packageIcons.map((item, index) => (
                <PackageContainer
                  onClick={() => handleSelectedFolder(item.folderName, index)}
                >
                  <item.icon size={30} />
                  <p>{item.folderName}</p>
                </PackageContainer>
              ))
            ) : (
              <>
                {packageIcons[selectedFolder?.indice]?.pack?.map((Item) => (
                  <>
                    <PackageContainer>
                      <Item size={30} />
                    </PackageContainer>
                  </>
                ))}
                <Button onClick={handleSelectIconFolder} className="confirm">
                  Confirmar
                </Button>
              </>
            )}
          </ModalContainer>
        </Modal>
        <ContactButton />
        <TitleItem>Personalize sua página</TitleItem>
        <section>
          <div className="header">
            <p>Deixe o AnyQuestion com a sua cara</p>
          </div>
          <div className="input-group">
            <SelectComponent
              label="Logotipo"
              type="image"
              title="Carregue a sua logo"
            />
            <SelectComponent
              onClick={handleToggleModal}
              label="Pacote de icones"
              title={selectedIconFolder}
              isSelect
              type="none"
            />
            <label className="color">Cor Principal</label>
            <div className="color">
              <SketchPicker
                color={selectedColor}
                onChangeComplete={(color) => {
                  setSelectedColor(color.hex);
                  setMainScolor(color.hex);
                }}
              />
            </div>
          </div>
          <ButtonItem color={mainColor}>
            <span>Criar</span>
          </ButtonItem>
        </section>
      </Container>
    </>
  );
}
