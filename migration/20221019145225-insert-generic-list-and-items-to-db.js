const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class insertGenericListAndItemsToDb20221019145225 {

    async up(queryRunner) {
        await queryRunner.query(
            `alter table \`generic_list\` modify \`description\` varchar(1000) null;`,);
        await queryRunner.query(
            `insert into \`generic_list\` (\`id\`,\`name\`,\`description\`) values ('5bf0a0ad-16d2-4d56-877e-350e4dd7ff54','Document types', null );`);
        await queryRunner.query(
            `insert into \`generic_list_item\` (\`id\`,\`name\`,\`list_id\`) values
                 ('885a6b6f-5d8f-4ad3-8825-43c29391db64','Passport','5bf0a0ad-16d2-4d56-877e-350e4dd7ff54'),
                 ('f5d2f2e4-f4e3-4325-b56a-9a9bd07c975f','Residence','5bf0a0ad-16d2-4d56-877e-350e4dd7ff54'),
                 ('0b49edcb-4d03-4c6c-8930-d270fd86abad','Kimlik','5bf0a0ad-16d2-4d56-877e-350e4dd7ff54'),
                 ('955cf33b-f54d-45f9-afaf-250483b46550','TC','5bf0a0ad-16d2-4d56-877e-350e4dd7ff54')
                 ;`);
    }

    async down(queryRunner) {
        await queryRunner.query(
            `delete from \`generic_list_item\`;`,);
        await queryRunner.query(
            `delete from \`generic_list\`;`,);
        await queryRunner.query(
            `alter table \`generic_list\` modify \`description\` varchar(1000) not null;`,);
    }

}
