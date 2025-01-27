import {
  LinksListItem,
  CustomLink,
  LinkIconAndTextContainer,
  LinkIconContainer,
  LinkText,
} from "./styledComponents";

const NavigationLinkItem = (props) => {
  const { path, isActive, icon, text, onClick, theme } = props;
  const Icon = icon;

  return (
    <LinksListItem onClick={onClick} $isActive={isActive} theme={theme}>
      <CustomLink to={path}>
        <LinkIconAndTextContainer>
          <LinkIconContainer $isActive={isActive} theme={theme}>
            <Icon />
          </LinkIconContainer>
          <LinkText $isActive={isActive} theme={theme}>
            {text}
          </LinkText>
        </LinkIconAndTextContainer>
      </CustomLink>
    </LinksListItem>
  );
};

export default NavigationLinkItem;
