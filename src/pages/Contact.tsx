import { Mail, Users, Building2, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-primary-foreground sm:text-5xl">
                Collaborators & Contact
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Join our global network advancing cancer care
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="mb-4 text-3xl font-bold text-foreground">Our Collaborative Network</h2>
                <p className="text-lg text-muted-foreground">
                  The Translate Oncology Initiative brings together leading institutions, researchers, and
                  healthcare professionals from around the world. Together, we're working to accelerate cancer
                  research translation and improve patient outcomes globally.
                </p>
              </div>

              <div className="mb-16 grid gap-8 sm:grid-cols-2">
                <Card className="border-primary/20">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Building2 className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Research Institutions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Partner with leading cancer research centers and academic medical institutions driving
                      innovation in oncology research and treatment development.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-secondary/20">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                      <Users className="h-6 w-6 text-secondary" />
                    </div>
                    <CardTitle>Clinical Partners</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Collaborate with oncology centers, hospitals, and clinical practices implementing
                      evidence-based cancer care and participating in clinical trials.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-accent/50">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent">
                      <Globe className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <CardTitle>Patient Organizations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Work alongside patient advocacy groups and support organizations ensuring patient voices
                      guide research priorities and care delivery.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>Industry Partners</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      Partner with pharmaceutical companies, biotechnology firms, and medical device
                      manufacturers advancing cancer treatment technologies.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-foreground">Get in Touch</h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground">
                    Interested in collaborating with the Translate Oncology Initiative? We welcome partnerships
                    with institutions, researchers, healthcare providers, and organizations committed to advancing
                    cancer care.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">General Inquiries</p>
                        <a href="mailto:info@translateoncology.ca" className="text-primary hover:underline">
                          info@translateoncology.ca
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Users className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Research Collaborations</p>
                        <a href="mailto:research@translateoncology.ca" className="text-primary hover:underline">
                          research@translateoncology.ca
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Building2 className="mt-1 h-5 w-5 text-primary" />
                      <div>
                        <p className="font-semibold text-foreground">Institutional Partnerships</p>
                        <a href="mailto:partnerships@translateoncology.ca" className="text-primary hover:underline">
                          partnerships@translateoncology.ca
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 rounded-lg bg-accent/30 p-6">
                    <h3 className="mb-3 font-semibold text-foreground">Join Our Network</h3>
                    <p className="text-sm text-muted-foreground">
                      Whether you're a researcher, clinician, patient advocate, or industry partner, there are many
                      ways to contribute to our mission. Contact us to learn more about collaboration opportunities,
                      resource sharing, and how you can support the translation of cancer research into practice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
