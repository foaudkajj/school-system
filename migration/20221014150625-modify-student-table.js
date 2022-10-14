const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class modifyStudentTable20221014150625 {

    async up(queryRunner) {
        await queryRunner.query(
            `alter table \`student\` add \`tr_name\` varchar(100) not null,
            add \`tr_surname\` varchar(100) not null,
            add \`gender\` enum('Male','Female') not null ;`,);

    }

}
