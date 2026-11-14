import { awardCategories } from "./awardCategories";

export type Winner = {
  id: number;
  name: string;
  image: string; // full image URL or "/images/winners/x.jpg" — empty shows a placeholder
  category: string;
  awardTitle: string;
  achievement: string;
};

type RealWinner = { name: string; image: string };

// Photos live in public/images/winners (served at /images/winners/...).
const PHOTOS = "/images/winners/";
const w = (name: string, file: string): RealWinner => ({ name, image: file ? PHOTOS + file : "" });

// Winners per category (keyed by the exact category name), from the winners list sheet,
// with photos matched by name from the "Upload Your Image" sheet.
const realWinners: Record<string, RealWinner[]> = {
  "Social Media Superstar Award": [
    w("Dunka Rani", "dunka-rani.jpg"),
    w("Harika Nalam", "harika-nalam.jpg"),
    w("Gowthami Reddy", "gowthami-reddy.jpg"),
    w("Swathi Dantla", "swathi-dantla.jpg"),
    w("A.V. Geethanjali", "a-v-geethanjali.jpg"),
    w("Sravanthi Kandula", "sravanthi-kandula.jpg"),
    w("Siva Nageswari", "siva-nageswari.jpg"),
    w("Chittipothu Revathi", "chittipothu-revathi.jpg"),
    w("Shankar Yanala", "shankar-yanala.jpg"),
    w("Siluveru Suhasini", "siluveru-suhasini.jpg"),
    w("Jillepalli Lakshmi Naga Swathi", "jillepalli-lakshmi-naga-swathi.jpg"),
    w("Roshini Reddy", "roshini-reddy.jpg"),
    w("Sheik Redishakrun", "sheik-redishakrun.jpg"),
    w("Swapna Priya", "swapna-priya.jpg"),
    w("Shanthi Sri Yelamanchili", "shanthi-sri-yelamanchili.jpg"),
    w("Suneetha Kalyan", "suneetha-kalyan.jpg"),
    w("D Rekha", "rrrd-1407.jpg"),
    w("Komira Prameela", "komira-prameela.jpg"),
    w("Ramadugu Sainatha", "ramadugu-sainatha.jpg"),
  ],
  "Viral Content Champion Award": [
    w("Sudharani Konduru", "sudharani-konduru.jpg"),
    w("Swathi Lakkoju", "swathi-lakkoju.jpg"),
    w("Saritha Gajawada", "saritha-gajawada.jpg"),
    w("Deepthi", "deepthi.jpg"),
    w("Poornima Kalyani", "poornima-kalyani.jpg"),
    w("Kasula Mouniks", "kasula-mouniks.jpg"),
    w("K Vijaya Laxmi", "k-vijaya-laxmi.jpg"),
    w("Panuganti Rojamma", "panuganti-rojamma.jpg"),
    w("Teppali Shirisha", "teppali-shirisha.jpg"),
    w("Lakshmi Vaishnavi", "lakshmi-vaishnavi.jpg"),
    w("Sadashivareddy Pendyala", "sadashivareddy-pendyala.jpg"),
    w("Satya Jyothi", "satya-jyothi.jpg"),
    w("N. Sai Katyayani", "n-sai-katyayani.jpg"),
    w("Shaik Haseena", "shaik-haseena.jpg"),
    w("Anuradha", "anuradha.jpg"),
    w("Manepalli Kanyakumari", "manepalli-kanyakumari.jpg"),
  ],
  "Most Creative Creator Award": [
    w("Devi Dunna", "devi-dunna.jpg"),
    w("Swathi Illa", "swathi-illa.jpg"),
    w("Meena", "meena.jpg"),
    w("Gorrela Ganga Bhavani", "gorrela-ganga-bhavani.jpg"),
    w("M. Rajasekhar", "m-rajasekhar.jpg"),
    w("Ganesh Katta", "ganesh-katta.jpg"),
    w("S. Praveena", "s-praveena.jpg"),
    w("V Sridevi", "v-sridevi.jpeg"),
    w("Shirisha Gundu", "shirisha-gundu.jpg"),
    w("Sneha Naidu", "sneha-naidu.jpg"),
    w("Ramankol Rahul", "ramankol-rahul.jpg"),
  ],
  "Consistency Champion Award": [
    w("Bairapaka Vallypadmini", "bairapaka-vallypadmini.jpg"),
    w("Jyothi Gullapelli", "jyothi-gullapelli.jpg"),
    w("Manjula Rajashekaruni", "manjula-rajashekaruni.jpg"),
    w("Prasanna Devi R", "prasanna-devi-r.jpeg"),
    w("Gurram Krishnaveni", "gurram-krishnaveni.jpg"),
    w("Vishnupriya Karri", "vishnupriya-karri.jpg"),
    w("Narayanamma", "narayanamma.jpg"),
    w("Yasam Lalitha", "yasam-lalitha.jpg"),
    w("Lavanya Indarapu", "lavanya-indarapu.jpg"),
    w("Mani Thalluri", "mani-thalluri.jpg"),
    w("Maredi Prabhavathamma", "maredi-prabhavathamma.jpg"),
    w("Vasavi Yada", "vasavi-yada.jpg"),
    w("P Suguna", "p-suguna.jpg"),
    w("Asra Begum", "asra-begum.jpg"),
    w("Nomula Haritha", "nomula-haritha.jpg"),
    w("Rama Devi Bonthu", "rama-devi-bonthu.jpg"),
    w("P. Annapurna", "p-annapurna.jpg"),
    w("Mayusha Lachugari", "mayusha-lachugari.jpg"),
    w("T V V Meenakshi", "t-v-v-meenakshi.jpg"),
    w("Martha Swapna", "martha-swapna.jpg"),
  ],
  "Educational Content Creator Award": [
    w("Chiluka Sravanthi", "chiluka-sravanthi.jpg"),
    w("Zareena Begum Shaik", "zareena-begum-shaik.jpg"),
    w("Bandari Swapna", "bandari-swapna.jpg"),
    w("Chekka Ramya", "chekka-ramya.jpg"),
    w("Gorla Pranitha", "gorla-pranitha.jpg"),
    w("Rajitha Thonukunuri", "rajitha-thonukunuri.jpg"),
    w("Jyothi Bhavani Gogikar", "jyothi-bhavani-gogikar.jpg"),
    w("V Surya Kumari", "v-surya-kumari.jpg"),
    w("Devatha Swetha", "devatha-swetha.jpg"),
    w("Padmaja Noothi", "padmaja-noothi.jpg"),
    w("Bhargavi Veeramalla", "bhargavi-veeramalla.jpg"),
    w("Sanga Jyothi", "sanga-jyothi.jpg"),
    w("Rajani Bhavanam", "rajani-bhavanam.jpg"),
    w("Bandari Sowjanya", "bandari-sowjanya.jpg"),
    w("M L N Sai Prasad", "m-l-n-sai-prasad.jpg"),
  ],
  "Rising Star Creator Award": [
    w("Srinivasa Rao Sanika", "srinivasa-rao-sanika.jpg"),
    w("Nagadevatha Poila", "nagadevatha-poila.jpg"),
    w("Odapally Bhagyalakshmi", "odapally-bhagyalakshmi.jpg"),
    w("Valukula Nageswaramma", "valukula-nageswaramma.jpg"),
    w("Manohar Dalu", "manohar-dalu.jpg"),
    w("Devi Visalakshi Pedapudi", "devi-visalakshi-pedapudi.jpg"),
    w("Inner Soul Glow by Suvarna", "inner-soul-glow-by-suvarna.jpg"),
    w("Shashank G G", "shashank-g-g.jpg"),
    w("Gampa Geetha", "gampa-geetha.jpg"),
    w("Dandu Rajitha", "dandu-rajitha.jpg"),
    w("Kranthi", "kranthi.jpg"),
    w("Ramadevi Chilumuri", "ramadevi-chilumuri.jpg"),
    w("Komire Mallesham", "komire-mallesham.jpg"),
    w("Vanisree Kandukuri", "vanisree-kandukuri.jpg"),
    w("Shirisha Thatipalli", "shirisha-thatipalli.jpg"),
    w("Shivali Patil", "shivali-patil.jpg"),
    w("Tejaswini Tamma", "tejaswini-tamma.jpg"),
    w("Shaik Lubna Zareen", "shaik-lubna-zareen.jpg"),
    w("Boddula Saiteja", "boddula-saiteja.jpg"),
    w("Buddepu Tejaswini", "buddepu-tejaswini.jpg"),
    w("Bommagani Upendar", "bommagani-upendar.jpg"),
    w("Deborah T", "deborah-t.jpg"),
    w("Chinthakayala Priyanka", "chinthakayala-priyanka.jpg"),
    w("Bacchu DivyaSri", "bacchu-divyasri.jpg"),
    w("Sireesha Buriti", "sireesha-buriti.jpg"),
    w("Uskala Sayavva", "uskala-sayavva.jpg"),
  ],
  "UGC Creator Award": [
    w("Divya & Revathi K", "divya-revathi-k.jpg"),
    w("Gattimi Anuradha", "gattimi-anuradha.jpg"),
    w("Maneesha Somavarapu", "maneesha-somavarapu.jpg"),
    w("Nagalakshmi Penugondla", "nagalakshmi-penugondla.jpg"),
    w("K. Sri Latha Reddy", "k-sri-latha-reddy.jpg"),
    w("G. Bhavitha", "g-bhavitha.jpg"),
    w("G. Preethi", "G.Preethi.jpeg"),
    w("Narendra Babu Ramisetti", "narendra-babu-ramisetti.jpg"),
    w("M. Kalavathi", "m-kalavathi.jpg"),
    w("Bhanumathi Rani", "bhanumathi-rani.jpg"),
    w("Srujana Rudra", "srujana-rudra.jpg"),
    w("Vangala Sumathi", "vangala-sumathi.jpg"),
    w("Raga Haritha", "raga-haritha.jpg"),
    w("G Kranthi Reddy", "g-kranthi-reddy.jpg"),
    w("Lavanya Kolla", "lavanya-kolla.jpg"),
    w("M.V. Swapna", "m-v-swapna.jpg"),
    w("G Manga", "g-manga.jpg"),
    w("Mangali Anitharaj", "mangali-anitharaj.jpg"),
    w("Pabbaraju Sai Rama Akshay", "pabbaraju-sai-rama-akshay.jpg"),
  ],
  "AI Creative Genius Award": [
    w("Srilakshmi Bedamsetty", "srilakshmi-bedamsetty.jpg"),
    w("Shylaja Adepu", "shylaja-adepu.jpg"),
    w("P. Shruthi Sri", "p-shruthi-sri.jpg"),
    w("Kagu Srilatha", "kagu-srilatha.jpg"),
    w("Pushpalatha Reddy", "pushpalatha-reddy.jpg"),
    w("M Naga Jyothi", "m-naga-jyothi.jpg"),
    w("Radha Madugupalli", "radha-madugupalli.jpg"),
    w("V Vasantha", "v-vasantha.jpg"),
    w("Sridevi Velagandula", "sridevi-velagandula.jpg"),
  ],
  "AI-Powered Personal Creator Award": [
    w("Bandari Sowjanya", "bandari-sowjanya.jpg"),
    w("Kammari Vijayalaxmi", "kammari-vijayalaxmi.jpg"),
    w("K Indra Keerthi V V Lakshmi", "k-indra-keerthi-v-v-lakshmi.jpg"),
    w("Rukmini Reddy", "rukmini-reddy.jpg"),
    w("Gyara Lavanya", "gyara-lavanya.jpg"),
    w("Swetha Madlapelly", "swetha-madlapelly.jpg"),
    w("Samanthapudi Sivagayathri", "samanthapudi-sivagayathri.jpg"),
    w("T. Roja Manga Devi", "t-roja-manga-devi.jpg"),
    w("Potnuru Hima Bindu", "potnuru-hima-bindu.jpg"),
    w("Gayathri Santhosh Dasu", "gayathri-santhosh-dasu.jpg"),
    w("Tenneti Annapurna", "tenneti-annapurna.jpg"),
    w("Doosa Lalitha", "doosa-lalitha.jpg"),
    w("K Dhanalaxmi", "k-dhanalaxmi.jpg"),
    w("Arpitha Thota", "arpitha-thota.jpg"),
  ],
};

let id = 0;
export const winners: Winner[] = awardCategories.flatMap((c) =>
  (realWinners[c.name] ?? []).map((r) => {
    id += 1;
    return { id, name: r.name, image: r.image, category: c.name, awardTitle: c.name, achievement: "" };
  }),
);

/** Number of winners actually listed for a category. */
export const winnerCount = (categoryName: string) => winners.filter((x) => x.category === categoryName).length;
