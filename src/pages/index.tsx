import SafeEnvironment from "@styles/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "@styles/components/data-display/PageTitle/PageTitle";
import UserInformation from "@styles/components/data-display/UserInformation/UserInformation";
import TextFieldMask from "@styles/components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@material-ui/core";
import {
  FormElementsContainer,
  ProfessionalsPaper,
  ProfessionalsContainer,
} from "@styles/pages/index.style";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os Profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={"99.999-999"}
            label={"Digite seu CEP"}
            fullWidth
            variant={"outlined"}
          />
          <Typography color={"error"}>CEP inválido</Typography>
          <Button
            variant={"contained"}
            color={"secondary"}
            sx={{ width: "220px" }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfessionalsPaper>
          <ProfessionalsContainer>
            <UserInformation
              name={"Rhuan cavalcante"}
              picture={"https://github.com/Cavalcanted12.png"}
              rating={3}
              description={"Manaus"}
            />
            <UserInformation
              name={"Rhuan cavalcante"}
              picture={"https://github.com/Cavalcanted12.png"}
              rating={3}
              description={"Manaus"}
            />
            <UserInformation
              name={"Rhuan cavalcante"}
              picture={"https://github.com/Cavalcanted12.png"}
              rating={3}
              description={"Manaus"}
            />
            <UserInformation
              name={"Rhuan cavalcante"}
              picture={"https://github.com/Cavalcanted12.png"}
              rating={3}
              description={"Manaus"}
            />
            <UserInformation
              name={"Rhuan cavalcante"}
              picture={"https://github.com/Cavalcanted12.png"}
              rating={3}
              description={"Manaus"}
            />
            <UserInformation
              name={"Rhuan cavalcante"}
              picture={"https://github.com/Cavalcanted12.png"}
              rating={3}
              description={"Manaus"}
            />
          </ProfessionalsContainer>
        </ProfessionalsPaper>
      </Container>
    </div>
  );
}
