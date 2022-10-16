const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class genericListItemTable20221016161025 {

    async up(queryRunner) {
        await queryRunner.query(
            `
              create table \`generic_list_item\` (
                \`id\` char(36) not null,
                \`name\` varchar(100) not null,
                \`list_id\` char(36) not null,
                constraint \`pk_generic_list_item\` primary key (\`id\`),
                constraint \`fk_generic_list_item_generic_list\` foreign key (\`list_id\`) references \`generic_list\` (\`id\`) on update cascade on delete restrict
            ) Engine=InnoDB;
              `,
        );
    }

    async down(queryRunner) {
        await queryRunner.query(
            `drop table \`generic_list_item\`;`,
        );
    }

}
