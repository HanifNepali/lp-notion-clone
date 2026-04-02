import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/layout/container";

export default function Home() {
  return (
    <Container as="main" className="flex flex-col gap-16 py-24">
      <SectionHeading>
        <SectionHeading.Title>Shared component check</SectionHeading.Title>
        <SectionHeading.Description>
          Verifying Button, SectionHeading, and Card compounds render correctly.
        </SectionHeading.Description>
        <SectionHeading.Action>
          <Button href="#" variant="primary">
            Get Notion free
          </Button>
        </SectionHeading.Action>
      </SectionHeading>

      <div className="flex gap-4">
        <Button href="#" variant="link" showArrow>
          Explore
        </Button>
        <Button variant="primary">Try Notion free</Button>
      </div>

      <Card className="max-w-sm">
        <Card.Header>
          <Card.Title>Card primitive check</Card.Title>
          <Card.Description>
            This should render inside a rounded, bordered surface.
          </Card.Description>
          <Card.Link>
            <Button variant="link" href="#" showArrow>
              Get template
            </Button>
          </Card.Link>
        </Card.Header>
      </Card>
    </Container>
  );
}
