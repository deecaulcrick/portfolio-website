import Connect from "@/components/Connect";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PostList from "@/components/PostList";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <WorkExperience />
      <PostList />
      <Connect />
    </div>
  );
}
