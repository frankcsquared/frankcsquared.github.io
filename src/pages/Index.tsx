import { BookOpen, Users, Microscope, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/80 py-20 sm:py-28">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary-foreground/5 animate-float-1" />
            <div className="absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-primary-foreground/5 animate-float-2" />
            <div className="absolute -bottom-16 left-1/4 h-48 w-48 rounded-full bg-primary-foreground/5 animate-float-3" />
            <div className="absolute top-1/4 left-1/2 h-32 w-32 rounded-full bg-primary-foreground/3 animate-float-1 [animation-delay:2s]" />
          </div>
          
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
                Translate Oncology Initiative
              </h1>
              <p className="mb-8 text-xl text-primary-foreground/90 sm:text-2xl">
                Bridging research and practice to improve cancer care worldwide
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#our-story"
                  className="rounded-lg bg-secondary px-6 py-3 text-base font-semibold text-secondary-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg"
                >
                  Learn Our Story
                </a>
                <a
                  href="/types-of-cancer"
                  className="rounded-lg border-2 border-primary-foreground/20 bg-primary-foreground/10 px-6 py-3 text-base font-semibold text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
                >
                  Explore Resources
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="our-story" className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:text-4xl">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  The Translate Oncology Initiative was inspired by clinical experiences that revealed the profound 
                  impact of language barriers on cancer care outcomes. Research and frontline observations have 
                  consistently demonstrated that difficulties with translation lead to significant reductions in 
                  treatment adherence, increased treatment side effects, and higher reported symptom burden among 
                  non-native English-speaking patients.
                </p>
                <p>
                  Clinical encounters have shown how communication barriers can prevent patients from fully 
                  understanding their diagnosis, treatment plans, and self-care instructions. When medical information 
                  isn't accessible in a patient's primary language, even the most advanced cancer treatments may fail 
                  to achieve their full potential. These challenges are particularly acute in oncology, where complex 
                  treatment regimens and critical decision-making demand clear, precise communication.
                </p>
                <p>
                  In response to these documented disparities, we decided to establish the Translate Oncology Initiative. 
                  Our mission is to bridge the communication gap by creating comprehensive, medically accurate resources 
                  translated into multiple languages. By making oncology information accessible to diverse patient 
                  populations, we aim to improve treatment adherence, reduce preventable side effects, and empower 
                  patients to be active participants in their cancer care journey.
                </p>
                <p>
                  Through evidence-based resources and ongoing research efforts, the initiative is committed to ensuring 
                  that language is never a barrier to quality cancer care. Every patient deserves to understand their 
                  diagnosis, treatment options, and care plans in their native language—a fundamental step toward 
                  equitable healthcare outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-accent/30 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-8 text-center text-3xl font-bold text-foreground sm:text-4xl">
                Our Mission
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="border-primary/20 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Education</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Providing comprehensive, evidence-based information about cancer types, treatments, and
                      screening to empower patients and healthcare professionals.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle>Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Fostering partnerships between researchers, clinicians, and patient advocates to accelerate
                      cancer care innovation and implementation.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 transition-all hover:shadow-lg sm:col-span-2 lg:col-span-1">
                  <CardHeader>
                    <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                      <Microscope className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle>Translation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Converting groundbreaking research discoveries into practical treatments and interventions that
                      improve patient outcomes worldwide.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
                <Heart className="h-8 w-8 text-secondary" fill="currentColor" />
              </div>
              <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl">
                Making a Difference
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Through our collaborative efforts, we're working to ensure that every cancer patient has access to
                the most advanced, personalized treatment options available. Our resources support informed
                decision-making, facilitate research collaboration, and promote best practices in oncology care.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-md transition-all hover:scale-105 hover:shadow-lg"
              >
                Get Involved
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
