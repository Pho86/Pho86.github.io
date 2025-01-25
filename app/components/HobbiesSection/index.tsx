import Section from "../Section";
export default function HobbiesSection() {
  return (
    <Section title="Hobbies" id="hobbies" grid="md:grid-cols-2">
      <div></div>
      <div>
        <p>Outside of developing applications, you can find me at the gym, playing video games.</p>
        <ul>
          <li>Reading</li>
          <li>Traveling</li>
          <li>Photography</li>
          <li>Cooking</li>
          <li>Gardening</li>
        </ul>
      </div>
    </Section>
  );
}
