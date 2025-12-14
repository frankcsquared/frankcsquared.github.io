import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TypesOfCancer = () => {
  const solidTumors = [
    { 
      name: "Breast Cancer", 
      description: "Cancer that forms in breast tissue, one of the most common cancers worldwide.",
      resources: [
        { lang: "English", flag: "🇺🇸", pdf: "/pdfs/breast-cancer-en.pdf" },
        { lang: "Français", flag: "🇫🇷", pdf: "/pdfs/breast-cancer-fr.pdf" },
      ]
    },
    { name: "Lung Cancer", description: "Cancer that begins in the lungs, often associated with smoking but can occur in non-smokers." },
    { name: "Colorectal Cancer", description: "Cancer of the colon or rectum, often developing from polyps in the intestinal lining." },
    { name: "Prostate Cancer", description: "Cancer in the prostate gland, one of the most common cancers in men." },
    { name: "Pancreatic Cancer", description: "Aggressive cancer of the pancreas with typically late detection." },
    { name: "Brain Tumors", description: "Abnormal growth of cells in brain tissue, varying from benign to highly malignant." },
    { name: "Head and Neck Cancers", description: "Cancers arising in the mouth, throat, nose, sinuses, or salivary glands." },
    { name: "Kidney Cancer", description: "Cancer that begins in the kidneys, most commonly renal cell carcinoma." },
    { name: "Liver Cancer", description: "Cancer that starts in the liver cells, including hepatocellular carcinoma." },
    { name: "Ovarian Cancer", description: "Cancer that forms in the ovaries, often detected at advanced stages." },
    { name: "Gastric Cancer", description: "Cancer of the stomach lining, also known as stomach cancer." },
    { name: "Bladder Cancer", description: "Cancer that begins in the bladder lining, often presenting with blood in urine." },
  ];

  const liquidTumors = [
    { name: "Leukemia", description: "Cancer of blood-forming tissues, affecting white blood cells and bone marrow." },
    { name: "Lymphoma", description: "Cancer of the lymphatic system, including Hodgkin and non-Hodgkin types." },
    { name: "Multiple Myeloma", description: "Cancer of plasma cells in bone marrow, affecting blood cell production." },
    { name: "Myelodysplastic Syndromes", description: "Group of disorders caused by poorly formed or dysfunctional blood cells." },
    { name: "Myeloproliferative Neoplasms", description: "Blood cancers where bone marrow makes too many blood cells." },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-br from-primary to-primary/80 py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold text-primary-foreground sm:text-5xl">
                Types of Cancer
              </h1>
              <p className="text-xl text-primary-foreground/90">
                Comprehensive information about solid and liquid tumors
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="solid" className="mx-auto max-w-6xl">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="solid" className="text-base">Solid Tumors</TabsTrigger>
                <TabsTrigger value="liquid" className="text-base">Liquid Tumors</TabsTrigger>
              </TabsList>
              
              <TabsContent value="solid">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-3">Solid Tumors</h2>
                  <p className="text-muted-foreground max-w-3xl mx-auto">
                    Solid tumors are abnormal masses of tissue that form in organs or tissues throughout the body.
                    They can be benign (non-cancerous) or malignant (cancerous). Below are some of the most common
                    solid tumor types.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {solidTumors.map((tumor) => (
                    <Card key={tumor.name} className="border-primary/10 transition-all hover:shadow-lg hover:border-primary/30">
                      <CardHeader>
                        <CardTitle className="text-lg">{tumor.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{tumor.description}</CardDescription>
                        {tumor.resources && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {tumor.resources.map((resource) => (
                              <Button
                                key={resource.lang}
                                variant="outline"
                                size="sm"
                                onClick={() => window.open(resource.pdf, '_blank')}
                                className="gap-2"
                              >
                                <span>{resource.flag}</span>
                                <span>{resource.lang}</span>
                              </Button>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="liquid">
                <div className="mb-8 text-center">
                  <h2 className="text-2xl font-bold text-foreground mb-3">Liquid Tumors</h2>
                  <p className="text-muted-foreground max-w-3xl mx-auto">
                    Liquid tumors, also called hematologic cancers, affect the blood, bone marrow, and lymphatic
                    system. These cancers involve abnormal production of blood cells and can spread throughout the
                    body via the bloodstream.
                  </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {liquidTumors.map((tumor) => (
                    <Card key={tumor.name} className="border-secondary/10 transition-all hover:shadow-lg hover:border-secondary/30">
                      <CardHeader>
                        <CardTitle className="text-lg">{tumor.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">{tumor.description}</CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TypesOfCancer;
