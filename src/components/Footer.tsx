import { renderContent } from "@/app/resources";
import { Flex, IconButton, SmartLink, Text } from "@/once-ui/components";
import { useTranslations } from "next-intl";
// import { company, social } from '@/app/resources'

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const t = useTranslations();
  const { company, social } = renderContent(t);

  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      padding="8"
      justifyContent="center"
    >
      <Flex
        fillWidth
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{company.name}</Text>
          <Text onBackground="neutral-weak">
            {/* Usage of this template requires attribution. Please don't remove the link to Once UI. */}
            / Build by{" "}
            <SmartLink
              style={{ marginLeft: "-0.125rem" }}
              href="https://www.yoxaz.com/"
            >
              Yoxaz Verse
            </SmartLink>
          </Text>
        </Text>
        <Flex gap="16">
          {social.map(
            (item) =>
              item.link && (
                <IconButton
                  key={item.name}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              )
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
