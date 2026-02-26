import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";

export const HomeCatalog = async () => {
  return (
    <section className="pt-30">
      <Container>
        <div className="bg-no-repeat bg-top-right bg-[url('/catalog/Мокап.webp')] h-133.75 pl-50 bg-size-[1050px]">
          <div className="w-132.5 space-y-8.75 mb-8.75">
            <h2 className="text-[42px] leading-[120%] tracking-[-2%] font-light">
              <strong className="font-medium">Скачайте полный каталог</strong>{" "}
              <br /> объектов готового <br /> арендного бизнеса
            </h2>

            <p className="text-[22px] leading-[130%] tracking-[-2%] w-92.75 ">
              и получите консультацию экспертав коммерческой недвижимости по
              подбору и деталям покупки
            </p>
          </div>

          <form className="bg-white p-5 rounded-2xl flex gap-5 w-[820px]">
            <Input type="tel" placeholder="Ваш номер телефона" />

            <button
              type="submit"
              className="inline-block py-8.25 px-13.75 rounded-[6px] bg-linear-to-tr from-[#FAEBD7] via-[#D8B78F] to-[#FAEBD7] text-xl font-medium text-[#624A29] leading-[100%] w-full"
            >
              Получить предложение
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
};
